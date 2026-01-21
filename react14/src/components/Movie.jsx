import { Outlet } from "react-router";
import { useRef } from "react";
import MovieEdit from "./MovieEdit";
import {deliteDAta} from "../services/delite"
function Movie({ movie,  }) {

  const modalRef = useRef(null);

 const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal(); // open modal via native dialog
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close(); // close modal
    }
  };


  const deleteData = async (id) => {
    try{
      deliteDAta(id)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main>
        <div
          id="movie"
          key={movie.id}
          className="grid grid-cols-6 bg-white p-5 rounded-2xl"
        >
          <div>{movie.title}</div>
          <div>{movie.genre}</div>
          <div>{movie.year}</div>
          <div>{movie.rating}</div>
          {/* <button className="bg-blue-600 text-white p-1 w-32 rounded-lg">
            Edit
          </button> */}
<button onClick={openModal}
            className="bg-blue-600 text-white p-1 w-32 rounded-lg">Edit</button>
 <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <div className="modal-action">
              
            </div>
            <div>
            {/* <MovieEdit
  movie={movie}
  closeModal={closeModal}
/> */}

            <button
                onClick={closeModal}
                className="btn float-end mt-2"
              >
                Close
              </button>
              </div>
          </div>
        </dialog>

          {/* <MovieEdit movie={movie}/> */}




          <button
            onClick={() => deleteData(movie.id)}
            className="bg-blue-600 text-white p-1 w-32 rounded-lg"
          >
            Delite
          </button>
        </div>
      </main>
    </>
  );
}
export default Movie;
