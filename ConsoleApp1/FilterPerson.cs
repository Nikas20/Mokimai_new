using System.Collections.Generic;
using System.Linq;
using Person = MyApp.Person;

namespace MyApp
{
    public static class FilterPerson
    {
        public static List<Person> Filter(List<Person> people, int category, string value)
        {
            return category switch
            {
                1 => people.Where(p => p.FirstName == value).ToList(),
                2 => people.Where(p => p.LastName == value).ToList(),
                3 => people.Where(p => p.Age == int.Parse(value)).ToList(),
                4 => people.Where(p => p.City == value).ToList(),
                _ => new List<Person>()
            };
        }

        public static List<Person> MultiFilter(List<Person> people, string filters, string values)
        {

            var filterIds = filters.Split(' ', StringSplitOptions.RemoveEmptyEntries)
                                   .Select(int.Parse)
                                   .ToList();


            var valueList = values.Split(' ', StringSplitOptions.RemoveEmptyEntries).ToList();

            IEnumerable<Person> query = people;

            for (int i = 0; i < filterIds.Count; i++)
            {
                int category = filterIds[i];


                if (i < valueList.Count)
                {
                    string val = valueList[i];
                    query = query.Where(GetPredicate(category, val));
                }
            }

            return query.ToList();
        }

        private static Func<Person, bool> GetPredicate(int category, string value)
        {
            return category switch
            {
                1 => p => p.FirstName == value,
                2 => p => p.LastName == value,
                3 => p => p.Birthdate.ToString() == value,
                4 => p => p.Age.ToString() == value,
                5 => p => p.City == value,
                _ => p => true
            };
        }


        public static void FilterPersonMethod()
        {
            Console.WriteLine("Write category to FILTER: 1 - FirstName, 2 - LastName, 3 - Birthdate, 4 - City");
            int categ = int.Parse(Console.ReadLine());
            Console.WriteLine("Write value:");
            string input = Console.ReadLine();

            List<Person> peopleFromFile = Person.LoadFromFile();

            var filterPeople = FilterPerson.Filter(peopleFromFile, categ, input);

            foreach (var per in filterPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Age: {per.Age}, City: {per.City}");
            }
        }
        public static void MultipleFilterPersonMethod()
        {
            Console.WriteLine("Write categories to FILTER : 1 - FirstName, 2 - LastName, 3 - Birthdate, 4 - City");
            string categ = Console.ReadLine();
            Console.WriteLine("Write value:");
            string input = Console.ReadLine();

            List<Person> peopleFromFile = Person.LoadFromFile();

            var filterPeople = FilterPerson.MultiFilter(peopleFromFile, categ, input);

            foreach (var per in filterPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Age: {per.Age}, City: {per.City}");
            }

        }
    }
}
