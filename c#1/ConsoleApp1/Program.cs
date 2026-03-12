using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Task1();
            // Task2();
            // Task3();
            // Task4();
            // Task5();
            // Task6();
            // Task7();
            // Task8();
            // Task9();
            Console.WriteLine("Hello World!");
        }

        static void Task1()
        {
            int num = 1;
            for(int i = 1; i <= 10;i++)
            {
               Console.WriteLine(i++); 
            }
        }
        static void Task2()
        {
            int num = 10;
            for(int i = 10; i >= 10; i--)
            {
               Console.WriteLine(i); 
            }
        }

        static void Task3()
        {
            int num = 10;
            for(int i = 0; i < 10; i++)
            {
               Console.WriteLine(num - i); 
            }
        }

        static void Task4()
        {
            int n = 10;
            for(int i = 1; i <= n; i++)
            {
               Console.WriteLine(i); 
            }
        }

        static void Task5()
        {
            int n = 10;
            for(int i = 0; i <= n; i++)
            {
                if (i % 2 == 0)
                {
                   Console.WriteLine(i);  
                }
               
            }
        }

        static void Task6()
        {
            int sum = 0;
            int n = 10;
            for(int i = 0; i <= n; i++)
            {
                sum += i; 
            }
            Console.WriteLine(sum); 
        }

        static void Task7()
        {
            Console.Write("Write number of numbers: ");
            int numbers = int.Parse(Console.ReadLine()); 

            int sum = 0;
            for(int i = 0; i < numbers; i++)
            {
               Console.Write("Write number: ");
               int number = int.Parse(Console.ReadLine()); 
               sum += number;
            }
            Console.WriteLine(sum); 
        }

        static void Task8()
        {
            Console.Write("Write number of numbers: ");
            int n = int.Parse(Console.ReadLine());
            int evenSum = 0;
            int oddSum = 0;
            for (int i = 0; i < n; i++)
            {
                Console.Write("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                if (number % 2 == 0)
                {
                    evenSum += number;
                }
                else
                {
                    oddSum += number;
                }
            }
            Console.WriteLine("Sum of even numbers: 2" + evenSum);
            Console.WriteLine("Sum of odd numbers: " + oddSum);
        }

        static void Task9()
        {
            Console.Write("Enter the first number: ");
            int a = int.Parse(Console.ReadLine());

            Console.Write("Enter the second number: ");
            int b = int.Parse(Console.ReadLine());

            int num1 = a;
            int num2 = b;

            while (b != 0)
            {
                int c = a % b;
                a = b;
                b = c;
            }

            Console.WriteLine($"\nGreatest Common Divisor (GCD) of {num1} and {num2} is: {a}");
        }

    }
}