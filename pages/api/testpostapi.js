export default async function TestPostApi(req, res){
    res.status(200).json({message: 'Post request sucess'})
}