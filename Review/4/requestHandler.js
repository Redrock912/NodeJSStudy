function start(request,respond){
    respond.writeHead(200,{'Content-Type':'text/html'});
    respond.write('Start Page');
    respond.end();
};

function show(request, respond){
    respond.writeHead(200,{'Content-Type':'text/html'});
    respond.write('Show...');
    respond.end();
};


module.exports = {
    start:start,
    show:show
}