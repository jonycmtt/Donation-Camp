import { Link } from "react-router-dom"

const ErrorElement = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <h3 className="text-4xl font-bold">Opps! This 404</h3>
      <Link to='/'>
        <button className="btn btn-outline"> Go to Home</button>
      </Link>
    </div>
  )
}

export default ErrorElement
