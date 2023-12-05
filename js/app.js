const menu_link_wraper =
        document.getElementsByClassName("menu_link_wraper");
      for (let i = 0; i < menu_link_wraper.length; i++) {
        const menu_link = menu_link_wraper[i];
        menu_link.addEventListener("click", function () {
          const rightArrow = this.querySelector(".right_arrow");
          const rightArrowCollection =
            document.querySelectorAll(".right_arrow");
          if (!this.nextElementSibling.classList.contains("hide")) {
            this.nextElementSibling.classList.remove("show");
            this.nextElementSibling.classList.add("hide");
            this.style.marginBottom="10px"
            if(rightArrow){
                rightArrow.style.rotate = "0deg";
            }
          } else {
            menu_link.style.marginBottom="0"
            for (let j = 0; j < menu_link_wraper.length; j++) {
                menu_link_wraper[j].style.marginBottom="10px"
              if (rightArrowCollection[j]) {
                rightArrowCollection[j].style.rotate = "0deg";
              }
              const element = menu_link_wraper[j];
              element.nextElementSibling.classList.add("hide");
              element.nextElementSibling.classList.remove("show");
            }
            this.style.marginBottom="0"
            this.nextElementSibling.classList.remove("hide");
            this.nextElementSibling.classList.add("show");
            if (rightArrow) {
              rightArrow.style.rotate = "90deg";
              rightArrow.style.transition = ".5s ease-in-out";
            }
          }
        });
      }