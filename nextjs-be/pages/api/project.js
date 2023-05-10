import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }

    var projectData = req.body
    var project;
    switch (projectData?.mode) {
        case 'GET':
            delete projectData.mode;
            project = await prisma.project.findUnique({
                where: {
                    id: projectData.id
                }
            })
            break;
        case 'DELETE':
            delete projectData.mode;
            project = await prisma.project.delete({
                where: {
                    id: projectData.id
                }
            })
            break;
        case 'ADD':
            delete projectData.mode;
            project = await prisma.project.create({
                data: projectData
            })
            break;
        case 'EDIT':
            delete projectData.mode;
            project = await prisma.project.update({
                where: {
                    id: projectData.id
                },
                data: projectData
            })
            break;
        case 'GETLIST':
            delete projectData.mode;
            project = await prisma.project.findMany();
            break;
    
        default:
            break;
    }
    res.json(project)
}