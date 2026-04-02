using System;
using order = MyApp.OrderPerson;
using filter = MyApp.FilterPerson;
using Person = MyApp.Person;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>
            {
            new Person { FirstName = "Jonas", LastName = "Jonaitis", Birthdate = new DateTime(1993, 5, 15), City = "Vilnius" },
            new Person { FirstName = "Petras", LastName = "Petraitis", Birthdate = new DateTime(1978, 8, 20), City = "Kaunas" },
            new Person { FirstName = "Ona", LastName = "Onienė", Birthdate = new DateTime(2001, 12, 10), City = "Klaipėda" },
            new Person { FirstName = "Mantas", LastName = "Mantinis", Birthdate = new DateTime(1973, 3, 25), City = "Šiauliai" },
            new Person { FirstName = "Eglė", LastName = "Eglaitė", Birthdate = new DateTime(1995, 11, 5), City = "Panevėžys" },
            new Person { FirstName = "Tomas", LastName = "Tomaitis", Birthdate = new DateTime(1983, 7, 30), City = "Vilnius" }
            };

            var top5OlderPeople = people.OrderByDescending(p => p.Birthdate).Take(5).ToList();

            Console.WriteLine("Top 5 oldest people:");
            foreach (var person in top5OlderPeople)
            {
                Console.WriteLine($"{person.FirstName} {person.LastName}, Birthdate: {person.Birthdate}, City: {person.City}");
            }

            string filePath = "zmones.txt";

            using (StreamWriter writer = new StreamWriter(filePath))
            {
                foreach (var person in people)
                {
                    writer.WriteLine($"{person.FirstName} {person.LastName} {person.Birthdate} {person.City}");
                }
            }
            Console.WriteLine("");
            // Person.DisplayPeople();
             Console.WriteLine("");
            Console.WriteLine("");
            // OrderPerson.MultipleOrderPersonMethod();
            Console.WriteLine("");
            FilterPerson.MultipleFilterPersonMethod();
            Console.WriteLine("");
            // FilterPerson.FilterPersonMethod();
        }
        

        
    }
}