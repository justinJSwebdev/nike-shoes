import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Next from 'src/icons/Next'
interface PaginationProps {
  pageSize: number
}
const RANGE = 2
const Pagination = ({ pageSize }: PaginationProps) => {
  const page = 3
  const renderPagination = () => {
    let dotAfter = false
    let docBefore = false
    const renderDotBefore = (index: number) => {
      if (!docBefore) {
        docBefore = true
        return (
          <span key={index} className='mx-2  rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='mx-2  rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber >= RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }
        return (
          <Link
            to={`/products/${page + 1}`}
            key={index}
            className={classNames(
              'mx-2 cursor-pointer  px-3 py-2 w-[30px] h-[30px] rounded-full flex items-center justify-center',
              {
                'font-bold bg-black text-white': pageNumber === page,
                'font-normal bg-transparent text-black': pageNumber !== page
              }
            )}
          >
            {pageNumber}
          </Link>
        )
      })
  }
  return (
    <div className='mt-6 flex flex-wrap justify-center items-center'>
      {page === 1 ? (
        <div></div>
      ) : (
        <Link className='mx-2 cursor-pointer' to='/'>
          <Next className='rotate-180'></Next>
        </Link>
      )}
      {renderPagination()}
      {page === pageSize ? (
        <div></div>
      ) : (
        <Link className='mx-2 cursor-pointer' to='/'>
          <Next></Next>
        </Link>
      )}
    </div>
  )
}

export default Pagination
