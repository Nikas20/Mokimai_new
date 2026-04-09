using System;

namespace MyApp
{
    public class GraduateStudent : Student
    {
        public string ThesisTitle { get; set; }
        public string Supervisor { get; set; }
        public bool ThesisSubmitted { get; set; }

        public override string GetRole() => "Graduate Student";
        public override string GetProfile() =>
            $"{GetRole()}: {FirstName} {LastName}, ID: {StudentId}, Program: {Program}, GPA: {GPA}, Year: {EnrollmentYear}, Thesis: {ThesisTitle}, Supervisor: {Supervisor}, Thesis Submitted: {(ThesisSubmitted ? "Yes" : "No")}";

        public virtual string GetAcademicStanding()
        {
            if (GPA >= 3.5) return "Distinction";
            if (GPA >= 3.0) return "Merit";
            if (GPA >= 2.0) return "Pass";
            return "At Risk";
        }
    }
}