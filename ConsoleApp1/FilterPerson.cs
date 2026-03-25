using System.Collections.Generic;
using System.Linq;

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
    }
}
