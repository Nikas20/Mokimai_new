using System;

namespace MyApp
{
    public class Student : Person
    {
        public string StudentId { get; set; }
        public string Program { get; set; }
        public double GPA { get; set; }
        public int EnrollmentYear { get; set; }

         public override string GetRole() => "Student";
        public override string GetProfile() => 
            $"{GetRole()}: {FirstName} {LastName}, ID: {StudentId}, Program: {Program}, GPA: {GPA}, Year: {EnrollmentYear}";


        public virtual string GetAcademicStanding()
        {
            if (GPA >= 3.5) return "Dean's List";
            if (GPA >= 3.0) return "Good Standing";
            if (GPA >= 2.0) return "Satisfactory";
            return "Academic Probation";
        }
    }
}