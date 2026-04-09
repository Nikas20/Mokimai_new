using System;

namespace MyApp
{
    public class UndergraduateStudent : Student
    {
        public string Major { get; set; }
        public string Minor { get; set; }
        public int TotalCredits { get; set; }

        public override string GetRole() => "Undergraduate Student";
        public override string GetProfile() =>
            $"{GetRole()}: {FirstName} {LastName}, ID: {StudentId}, Major: {Major}, Minor: {Minor}, GPA: {GPA}, Year: {EnrollmentYear}, Credits: {TotalCredits}";

        public override string GetAcademicStanding()
        {
            string gpaStatus = base.GetAcademicStanding();

            string yearName;
            if (TotalCredits < 30) yearName = "Freshman";
            else if (TotalCredits < 60) yearName = "Sophomore";
            else if (TotalCredits < 90) yearName = "Junior";
            else yearName = "Senior";

            return $"{gpaStatus} ({yearName})";
        }
    }
}