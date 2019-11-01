let infoStatus = document.querySelector('#node_status')
let infoNode = document.querySelector('#node_node')
let infoFile = document.querySelector('#node_file')
let searchGo = document.querySelector('#search_go')
// let remote_test = document.querySelector('#remote-test')
let target_ = new Map();
let current_ip = '10.28.247.223';
let addrs = new Array(2);
let id_ip = new Map();

let nodeInitStatus = false;

//状态
infoStatus.addEventListener('click', function (e) {
    e.preventDefault();
    statusRemoteNode();
}, false)
//节点
infoNode.addEventListener('click', function (e) {
    e.preventDefault();
    nodeRemoteNode();
}, false)
//文件
infoFile.addEventListener('click', function (e) {
    e.preventDefault();
    fileRemoteNode();
}, false)
//搜索hash
searchGo.addEventListener('click', function (e) {
    e.preventDefault();
    searchFile();
}, false)


//显示状态信息函数。已连接节点数/节点id/托管文件的HTML在这里添加的
function statusRemoteNode() {
    var node_con = document.getElementById("node_info_container");
    node_con.style.display = "none";
    var s = document.getElementById("status_container");
    s.style.display = "block";
    //ID
    var dict = {ID: 123456, filesize: 52, nodes: 100};
    document.getElementById("nodeid_value").innerHTML = dict.ID;
    //托管文件大小
    document.getElementById("filesize_value").innerHTML = dict.filesize + " MB 文件";
    //连接节点、连接节点数量
    document.getElementById("nodenums_value").innerHTML = dict.nodes;
}

//节点信息，显示的地址+节点hash
function nodeRemoteNode() {
    //展示节点信息
    var node_con = document.getElementById("node_info_container");
    node_con.style.display = "block";
    //隐藏状态信息
    var s = document.getElementById("status_container");
    s.style.display = "none";
    //清空原有的节点信息
    document.getElementById("info_addr").innerHTML = "";
    document.getElementById("info_hash").innerHTML = "";
    for (var i = 0; i < 20; i++) {
        var p = document.createElement("div");
        p.className = "listitem";
        p.innerHTML = "ipv4/10.123.244.233";
        document.getElementById("info_addr").appendChild(p);
    }
    for (var i = 0; i < 20; i++) {
        var p = document.createElement("div");
        p.className = "listitem";
        p.innerHTML = "Qme8g49gm3q4Acp7xWBKg3nAa9fxZ1YmyDJdyGgoG6LsXh";
        document.getElementById("info_hash").appendChild(p);
    }
}


