// window.onload = function () {
//     document.getElementById("download")
//         .addEventListener("click", () => {
//             const invoice = this.document.getElementById("invoice");
//             console.log(invoice);
//             console.log(window);
//             var opt = {
//                 margin: 0.2,
              
              
//                 // margin-top: 0,
//                 // margin-left: 0.5,
//                 // margin-right: 0.8,
//                 // margin-bottom: 0.8,
                
//                 filename: 'myfile.pdf',
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//             };
//             html2pdf().from(invoice).set(opt).save();
//         })
// }

// function generatePDF(){
//     const element = this.document.getElementById("invoice");
//     file1()
//     .from(element)
//     .save();
// }


window.onload = function () {
document.getElementById("download")
.addEventListener("click", () => {
const invoice = this.document.getElementById("invoice");
console.log(invoice);
console.log(window);
document.getElementById("download").style.display="none";
var opt = {
margin: 0.3,
filename: 'myfile.pdf',
image: { type: 'jpeg', quality: 0.98 },
html2canvas: { scale: 2 },
jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};
html2pdf()
.from(invoice)
.set(opt)
.save();
})
let n = document.querySelectorAll(".number");
for (i=0;i<n.length;i++){
n[i].value = Math.floor(Math.random() * 100);
}
}