import Star from "../../public/images/Star.svg"
import Delete from "../../public/images/Trash can.svg"
import Edit from "../../public/images/Edit 1.svg"
import Cover from "../../public/images/meme.jpg"

/**
 * Props
 * - cover (React node or string URL) optional
 * - title (string)
 * - startDate (string, e.g., "16/09/2025")
 * - genre (string)
 * - rating (number, 0-5)
 * - status (string)
 * - onDelete (fn)
 * - onEdit (fn)
 * - StarIcon, TrashIcon, EditIcon (React components for your SVGs)
 */
export default function BookCard({
  cover= Cover.src,
  title = "Título do Livro",
  startDate = "16/09/2025",
  genre = "Ação",
  rating = 2.5,
  status = "A iniciar",
  onDelete = () => {console.log("del")},
  onEdit = () => {console.log("edit")},
  StarIcon= Star.src,
  TrashIcon= Delete.src,
  EditIcon= Edit.src,
}) {
  const renderCover = () => {
    if (!cover) {
      return (
        <div className="flex items-center justify-center w-28 h-40 bg-gray-100 rounded-md border border-gray-200 text-gray-400">
          Capa
        </div>
      );
    }
    if (typeof cover === "string") {
      return (
        <img
          src={cover}
          alt={`${title} capa`}
          className="w-28 h-40 object-cover rounded-md border border-gray-200"
        />
      );
    }
    return <div className="w-28 h-40">{cover}</div>;
  };

  return (
    <article className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-md">
      {renderCover()}

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>

        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <div>
            <span className="font-medium text-gray-800">Início</span>
            <span className="ml-2">{startDate}</span>
          </div>

          <div>
            <span className="font-medium text-gray-800">Gênero</span>
            <span className="ml-2">{genre}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
              {StarIcon ? (
                <span className="w-4 h-4 text-yellow-500">
                  <img src={StarIcon} className="w-4 h-4" />
                </span>
              ) : (
                <svg
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118L10 15.347l-3.55 2.658c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.366 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              )}
              <span className="ml-2 font-medium text-yellow-700">{rating}</span>
            </div>

            <div className="ml-3 text-sm text-gray-700">
              <span className="font-medium">Status:</span>
              <span className="ml-2">{status}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            // onClick={onDelete}
            aria-label="Excluir"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 border border-red-100"
          >
            {TrashIcon ? <img src={TrashIcon} className="w-4 h-4" /> : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 7L5 7M10 11v6M14 11v6M9 7l1-3h4l1 3M6 7h12" />
              </svg>
            )}
            <span className="text-sm">Excluir</span>
          </button>

          <button
            type="button"
            // onClick={onEdit}
            aria-label="Editar"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-50 text-green-700 hover:bg-green-100 border border-green-100"
          >
            {EditIcon ? <img src={EditIcon} className="w-4 h-4" /> : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
              </svg>
            )}
            <span className="text-sm">Editar</span>
          </button>
        </div>
      </div>
    </article>
  );
}
