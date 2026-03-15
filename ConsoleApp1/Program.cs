using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int x = 3;
            int y = 3;

            int[,] mas1 = new int[x, y];
            int[,] mas2 = new int[x, y];

             for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas1[i, j] = number;
                }
            }

            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas2[i, j] = number;
                }
            }

            int[,] mas3 = SumMatrices(mas1, mas2);

            for (int i = 0; i < x; i++)
            {
                for (int j = 0; j < y; j++)
                {
                    Console.Write(mas3[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
        static int[,] SumMatrices(int[,] m1, int[,] m2)
        {
            int rows = m1.GetLength(0);
            int cols = m1.GetLength(1);
            int[,] result = new int[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    result[i, j] = m1[i, j] + m2[i, j];
                }
            }
            return result;
        }
    }
}
