using System;

namespace MyApp
{
    public class Teacher : Staff
    {
        public string SubjectArea { get; set; }
        public List<string> CoursesTaught { get; set; } = new List<string>();
        public double TeachingRating { get; set; }

        public override string GetRole() => "Teacher";
        public override string GetProfile() => 
            $"{GetRole()}: {FirstName} {LastName}, Dept: {Department}, Subject: {SubjectArea}, Salary: {Salary:C}, Hired: {HireDate.ToShortDateString()}, Teaching Rating: {TeachingRating:F1}, Courses: {string.Join(", ", CoursesTaught)}";

        public virtual decimal CalculateAnnualBonus()
        {
            decimal baseBonus = base.CalculateAnnualBonus();
            return TeachingRating > 4.5 ? baseBonus + (Salary * 0.10m) : baseBonus;
        }
        
    }
}