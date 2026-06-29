        window.addEventListener("hashchange", function () {
            window.scrollTo(window.scrollX, window.scrollY - 600);
        });

        function myFunction() {
            var show = document.getElementById("show");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");
          
            if (show.style.display === "none") {
              show.style.display = "inline";
              btnText.innerHTML = "Tampilkan semua informasi";
              moreText.style.display = "none";
            } else {
              show.style.display = "none";
              btnText.innerHTML = "Tampilkan sedikit informasi";
              moreText.style.display = "inline";
            }
          }

        function myFunction2() {
            var show2 = document.getElementById("show2");
            var moreText2 = document.getElementById("more2");
            var btnText2 = document.getElementById("myBtn2");
          
            if (show2.style.display === "none") {
              show2.style.display = "inline";
              btnText2.innerHTML = "Tampilkan semua informasi";
              moreText2.style.display = "none";
            } else {
              show2.style.display = "none";
              btnText2.innerHTML = "Tampilkan sedikit informasi";
              moreText2.style.display = "inline";
            }
          }