export default function handler(req, res){
    return res.status(200).json({text: 'hello there!'});
}

//call this API at /api/hello

//don't call this API from getStaticProps or getStaticPaths. Add back end code
//directly to those functions, like for querying databases, etc.