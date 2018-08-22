const exec = require('child_process').exec;

function Vminify(opt){
    if (!(this instanceof Vminify)) return new Vminify(opt);
    const defaultOpt = {
        src: '',
        dist: '',
        command: '',
        quality: '500k', //一般500k左右即可，人眼看不到明显的闪烁，这个是与视频大小最直接相关的；
        width: '',
        height: '',
    };
    this.options = Object.assign(defaultOpt,opt);

    if (this.options.command) {
        exec(this.options.command, (error, stdout, stderr) => {
            error && console.log(error) && process.exit();
            console.log('stdout',stdout);
            console.log('stderr',stderr);
        });
    }

    !this.options.src && console.log('\n × Please enter this video src.') && process.exit();

    this.options.dist = this.options.dist ? this.options.dist : this.options.src;

    // if (this.options.src.indexOf('mp3') > -1) {
    //     this.options.command = `ffmpeg -i ${this.options.src} -b:a 128k ${this.options.dist}`;
    // }
    // else{
    //     this.options.command = `ffmpeg -i ${this.options.src} -b:v ${this.options.quality} -bufsize ${this.options.quality} -c:v libx264 ${(this.options.width && this.options.height) ? `-s ${this.options.width}x${this.options.height}` : ''} ${this.options.dist}`;
    // }
    this.options.command = `ffmpeg -i ${this.options.src} -b:v ${this.options.quality} -bufsize ${this.options.quality} -c:v libx264 ${(this.options.width && this.options.height) ? `-s ${this.options.width}x${this.options.height}` : ''} ${this.options.dist}`;

    exec(this.options.command, (error, stdout, stderr) => {
        error && console.log(error) && process.exit();
        console.log('stdout',stdout);
        console.log('stderr',stderr);
    });
}
