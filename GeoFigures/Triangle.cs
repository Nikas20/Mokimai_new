using System;

namespace MyApp
{
    internal class Triangle : Shape
    {
        private double Base{ get; set;}
        private double Height{ get; set;}

        public Triangle(double Base, double Height)
        {
            this.Base = Base;
            this.Height = Height;
        }

        public double GetArea()
        {
            return 0.5 * Base * Height;
        }
        public override double GetPerimeter()
        {
            double side = Math.Sqrt(Math.Pow(Base / 2, 2) + Math.Pow(Height, 2));
            return Base + 2 * side;
        }
        
    }
}