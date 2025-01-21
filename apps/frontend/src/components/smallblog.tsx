import { Link } from "react-router-dom";

interface Smallblogprops{
    id:int;
    title:string;
    createdAt:DateTime;
    thumbnailurl:string;
}

export const Smallblog=({
    id,
    title,
    createdAt,
    thumbnailurl
}:Smallblogprops)=>{
        return <Link to={`/blog/${id}`}>
        <div>
        <div>
            <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
        <div className="blog-card  rounded-xl overflow-hidden shadow-lg">
          <img
            src={thumbnailurl}
            alt="Blog 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-400 text-sm">{createdAt}</p>
            <h3 className="text-lg font-semibold mt-2">
              {title}
            </h3>
            {/* <a
              href="#"
              className="text-purple-500 mt-4 inline-block"
              onClick={()=>navigate(`/blog/${id}`)}
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
        </div>
        </div>
    </Link>
}