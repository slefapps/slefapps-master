export = [
    {
        method: 'get',
        path: '/test',
        handler: (req:any, res:any) => {
            res.send('Hello World! test');
        }
    },
    {

        method: 'get',
        path: '/test/:id',
        handler: (req:any, res:any) => {
            res.send(`Hello World! test ${req.params.id}`);
        }
    }
]