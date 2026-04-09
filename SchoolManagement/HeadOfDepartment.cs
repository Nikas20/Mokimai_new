using System;

namespace MyApp
{
    public class HeadOfDepartment : Teacher
    {
        public int TeamSize { get; set; }
        public string DepartmentVision { get; set; }

        public override string GetRole() => "Head of Department";

        public override string GetProfile() => 
            $"{GetRole()}: {FirstName} {LastName}, Dept: {Department}, Subject: {SubjectArea}, Salary: {Salary:C}, Hired: {HireDate.ToShortDateString()}, Teaching Rating: {TeachingRating:F1}, Courses: {string.Join(", ", CoursesTaught)} Team Size: {TeamSize}, Vision: {DepartmentVision}";

        public virtual string GetContactInfo() => $"Email: {Email}, Dept: {Department}, Vision: {DepartmentVision}";

        public virtual decimal CalculateAnnualBonus()
        {
            decimal baseBonus = base.CalculateAnnualBonus();
            return  baseBonus + (Salary * 0.15m);
        } 

    }
}