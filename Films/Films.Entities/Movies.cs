namespace Films.Entities
{
    public class Movies
    {
        public int Id{get; set;}
        public string Title {get; set;}
        public DateTime Year{get; set;}
        public int Rating{get; set;}
        public int GenreId{get; set;}
        public Genres Genre { get; set; }
        public int DirectorId{get; set;}
        public Directors Director { get; set; }
    }
}