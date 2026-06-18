using Xunit;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TravelApi.Controllers;
using TravelApi.Data;
using TravelApi.DTO;
using TravelApi.Models;

namespace TravelApi.Tests.Controllers;

public class TaaskControllerTests
{
    [Fact]
    public async Task Create_Should_Create_Task()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        using var context = new AppDbContext(options);

        var controller = new TaaskController(context);

        var user = new ClaimsPrincipal(
            new ClaimsIdentity(
            [
                new Claim(ClaimTypes.NameIdentifier, "1"),
                new Claim(ClaimTypes.Role, "USER")
            ], "TestAuth"));

        controller.ControllerContext = new ControllerContext
        {
            HttpContext = new DefaultHttpContext
            {
                User = user
            }
        };

        var dto = new CreateTaaskDto
        {
            Title = "Test task",
            Description = "Test description"
        };

        // Act
        var result = await controller.Create(dto);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);

        Assert.Single(context.Taasks);

        var task = context.Taasks.First();

        Assert.Equal("Test task", task.Title);
        Assert.Equal("Test description", task.Description);
        Assert.Equal(1, task.AccountId);
    }

    [Fact]
public async Task Delete_Should_Remove_Task()
{
    var options = new DbContextOptionsBuilder<AppDbContext>()
        .UseInMemoryDatabase(Guid.NewGuid().ToString())
        .Options;

    using var context = new AppDbContext(options);

    context.Taasks.Add(new Taask
    {
        Title = "Test",
        Description = "Test",
        AccountId = 1
    });

    await context.SaveChangesAsync();

    var controller = new TaaskController(context);

    var user = new ClaimsPrincipal(
        new ClaimsIdentity(
        [
            new Claim(ClaimTypes.NameIdentifier, "1"),
            new Claim(ClaimTypes.Role, "USER")
        ], "Test"));

    controller.ControllerContext = new ControllerContext
    {
        HttpContext = new DefaultHttpContext
        {
            User = user
        }
    };

    var taskId = context.Taasks.First().Id;

    var result = await controller.Delete(taskId);

    Assert.IsType<NoContentResult>(result);
    Assert.Empty(context.Taasks);
}
}