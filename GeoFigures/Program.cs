using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Circle> circles = new List<Circle>();
            List<Triangle> triangles = new List<Triangle>();
            List<Shape> shapes = new List<Shape>();
            shapes.Add(new Rectangle(5, 10));
            shapes.Add(new Circle(7));
            shapes.Add(new Triangle(3, 4));
        }
    }
}