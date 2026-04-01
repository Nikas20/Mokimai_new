using System;

namespace MyApp
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public DateTime Birthdate { get; set; }
        public int Age { 
            get
            {
                var now = DateTime.Today;
                var age = now.Year - Birthdate.Year; 
                if (Birthdate > now.AddYears(-age)) age--;
                return age;
            }          
        }
        public string City { get; set; }
    }
}