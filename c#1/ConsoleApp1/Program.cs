using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 1
            
            var a = 1;
            var b = 2;
            var c = 3;

            if(a > b)
            {
              Console.WriteLine("a didesne uz b");  
            }
            else
            {
              Console.WriteLine("b didesne uz a");    
            }

            // 2

            if(a > b)
            {
              Console.WriteLine("a didesne uz b");  
            }
            else if(b > a)
            {
              Console.WriteLine("b didesne uz a");    
            }
            else
            {
              Console.WriteLine("a ir b ligus");  
            }

            // 3

            if(a > b && a > c)
            {
                 Console.WriteLine("a didesne");
            }
            else if(b > a && b > c)
            {
                Console.WriteLine("b didesne");
            }
            else if(c > a && c > b)
            {
                Console.WriteLine("c didesne");
            }

            // 4

            var n = 5;

            if(n / 2 == 0)
            {
                 Console.WriteLine("lyginid");
            }
            else
            {
                 Console.WriteLine("nelinis");
            }
            

            Console.WriteLine("Hello World!");
        }
    }
}