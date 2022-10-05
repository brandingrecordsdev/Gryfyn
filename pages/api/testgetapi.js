export default async function TestGetApi(req, res){
    res.status(200).json({message: 'Get request sucess'})
}