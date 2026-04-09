using System;


namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var undergrad = new UndergraduateStudent
            {
                FirstName = "Jonas",
                LastName = "Jonaitis",
                StudentId = "S123",
                GPA = 3.9,
                TotalCredits = 45,
                Major = "Informatics",
                Email = "jonas@uni.lt"
            };

            var grad = new GraduateStudent
            {
                FirstName = "Asta",
                LastName = "Astaite",
                StudentId = "G456",
                GPA = 3.8,
                ThesisTitle = "AI in Medicine",
                Supervisor = "Prof. Petrauskas",
                Email = "asta@uni.lt"
            };

            var teacher = new Teacher
            {
                FirstName = "Petras",
                LastName = "Petraitis",
                EmployeeId = "T001",
                Salary = 3000,
                HireDate = new DateTime(2015, 5, 10),
                TeachingRating = 4.8,
                SubjectArea = "Math",
                Email = "petras@uni.lt",
                Department = "Science"
            };

            var head = new HeadOfDepartment
            {
                FirstName = "Marija",
                LastName = "Madre",
                EmployeeId = "H001",
                Salary = 4500,
                HireDate = new DateTime(2000, 1, 1),
                TeachingRating = 4.9,
                TeamSize = 15,
                Email = "marija@uni.lt",
                Department = "Science"
            };

            var admin = new Administrator
            {
                FirstName = "Lukas",
                LastName = "Lukaitis",
                EmployeeId = "A001",
                Salary = 2500,
                HireDate = new DateTime(2020, 3, 15),
                Office = "Rectorate 101",
                Email = "lukas@uni.lt",
                Department = "Administration"
            };

            Console.WriteLine("--- VISI PROFILIAI ---");
            List<Person> people = new List<Person> { undergrad, grad, teacher, head, admin };
            foreach (var p in people) Console.WriteLine(p.GetProfile());


            Console.WriteLine("\n--- DARBUOTOJŲ BONUSAI ---");
            List<Staff> staffList = new List<Staff> { teacher, head, admin };
            foreach (var s in staffList)
                Console.WriteLine($"{s.FirstName} ({s.GetRole()}): Bonusas = {s.CalculateAnnualBonus():C}");

            Console.WriteLine("\n--- STUDENTŲ AKADEMINĖ BŪKLĖ ---");
            List<Student> students = new List<Student> { undergrad, grad };
            foreach (var st in students)
                Console.WriteLine($"{st.FirstName}: GPA = {st.GPA}, Būklė: {st.GetAcademicStanding()}");
        }
    }
}