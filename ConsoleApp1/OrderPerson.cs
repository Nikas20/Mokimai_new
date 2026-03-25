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
                3 => people.OrderBy(p => p.Age).ToList(),
                4 => people.OrderBy(p => p.City).ToList(),
                _ => people
            };
        }
    }
}
