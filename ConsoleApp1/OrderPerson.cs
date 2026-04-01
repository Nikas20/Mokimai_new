using System.Collections.Generic;
using System.Linq;

namespace MyApp
{
    public static class OrderPerson
    {

        public static List<Person> Order(List<Person> people, int category)
        {
            return category switch
            {
                1 => people.OrderBy(p => p.FirstName).ToList(),
                2 => people.OrderBy(p => p.LastName).ToList(),
                3 => people.OrderBy(p => p.Birthdate).ToList(),
                4 => people.OrderBy(p => p.Age).ToList(),
                5 => people.OrderBy(p => p.City).ToList(),
                _ => people
            };
        }

        public static List<Person> MultipleOrder(List<Person> people, string categories)
        {

            var categoryList = categories.Split(' ').Select(int.Parse).ToList();

            IOrderedEnumerable<Person> sortedItems = null;

            foreach (var category in categoryList)
            {
                Func<Person, object> test = GetSelector(category);

                if (sortedItems == null)
                    sortedItems = people.OrderBy(test);
                else
                    sortedItems = sortedItems.ThenBy(test);
            }

            return sortedItems?.ToList() ?? people;


        }

        private static Func<Person, object> GetSelector(int category)
        {
            return category switch
            {
                1 => p => p.FirstName,
                2 => p => p.LastName,
                3 => p => p.Birthdate,
                4 => p => p.Age,   
                5 => p => p.City,
                _ => p => p.FirstName 
            };
        }
    }

}

