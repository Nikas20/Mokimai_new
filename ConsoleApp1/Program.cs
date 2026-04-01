using System;

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
            // DisplayPeople();
            Console.WriteLine("");
            // MultipleOrderPersonMethod();
            Console.WriteLine("");
            MultipleFilterPersonMethod();
            Console.WriteLine("");
            // FilterPersonMethod();
        }
        static void DisplayPeople()
        {
            using StreamReader reader = new StreamReader("zmones.txt");
            List<Person> peopleFromFile = new List<Person>();
            string line;

            while ((line = reader.ReadLine()) != null)
            {
                string[] parts = line.Split(' ');

                if (parts.Length >= 4)
                {

                    peopleFromFile.Add(new Person
                    {
                        FirstName = parts[0],
                        LastName = parts[1],
                        Birthdate = DateTime.Parse(parts[2] + " " + parts[3]),
                        City = parts[parts.Length - 1]
                    });

                }
            }

            // Выводим всех прочитанных людей
            foreach (var person in peopleFromFile)
            {
                Console.WriteLine($"{person.FirstName} {person.LastName}, Birthdate: {person.Birthdate:yyyy-MM-dd}, City: {person.City}");
            }
        }


        static List<Person> LoadFromFile()
        {
            List<Person> peopleFromFile = new List<Person>();
            if (!File.Exists("zmones.txt")) return peopleFromFile;

            using StreamReader reader = new StreamReader("zmones.txt");
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                string[] parts = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (parts.Length >= 4)
                {
                    string rawDate = string.Join(" ", parts.Skip(2).Take(parts.Length - 3));

                    peopleFromFile.Add(new Person
                    {
                        FirstName = parts[0],
                        LastName = parts[1],
                        Birthdate = DateTime.Parse(rawDate),
                        City = parts[parts.Length - 1]
                    });
                }
            }
            return peopleFromFile;
        }

        static void OrderPersonMethod()
        {
            Console.WriteLine("Write category to ORDER: 1 - FirstName, 2 - LastName, 3 - Birthdate, 4 - City");
            int categ = int.Parse(Console.ReadLine());

            List<Person> peopleFromFile = LoadFromFile();

            var sortedPeople = OrderPerson.Order(peopleFromFile, categ);

            foreach (var per in sortedPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Birthdate: {per.Birthdate}, City: {per.City}");
            }
        }
        static void MultipleOrderPersonMethod()
        {
            Console.WriteLine("Write categories to ORDER (comma separated): 1 - FirstName, 2 - LastName, 3 - Birthdate, 4 - City");
            string categ = Console.ReadLine();

            List<Person> peopleFromFile = LoadFromFile();

            var sortedPeople = OrderPerson.MultipleOrder(peopleFromFile, categ);

            foreach (var per in sortedPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Birthdate: {per.Birthdate}, City: {per.City}");
            }
        }


        static void FilterPersonMethod()
        {
            Console.WriteLine("Write category to FILTER: 1 - FirstName, 2 - LastName, 3 - Birthdate, 4 - City");
            int categ = int.Parse(Console.ReadLine());
            Console.WriteLine("Write value:");
            string input = Console.ReadLine();

            List<Person> peopleFromFile = LoadFromFile();

            var filterPeople = FilterPerson.Filter(peopleFromFile, categ, input);

            foreach (var per in filterPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Age: {per.Age}, City: {per.City}");
            }
        }
        static void MultipleFilterPersonMethod()
        {
            Console.WriteLine("Write categories to FILTER : 1 - FirstName, 2 - LastName, 3 - Birthdate, 4 - City");
            string categ = Console.ReadLine();
            Console.WriteLine("Write value:");
            string input = Console.ReadLine();

            List<Person> peopleFromFile = LoadFromFile();

            var filterPeople = FilterPerson.MultiFilter(peopleFromFile, categ, input);

            foreach (var per in filterPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Age: {per.Age}, City: {per.City}");
            }

        }
    }
}