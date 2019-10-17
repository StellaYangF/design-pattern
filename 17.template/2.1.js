class Modal{
  constructor(options = {}) {
    this.title = options.title || "Title";
    this.content = options.content || "Content";
    this.onConfirm = options.onConfirm;
    this.onCancel = options.onCancel;
    this.init();
    this.eventListener();
  }

  init() {
    this.panel = document.createElement('div');
    this.panel.className = "modal";
    document.body.appendChild(this.panel);

    let titleP = this.titleP = document.createElement('p');
    titleP.innerHTML = this.title;
    titleP.className = "title";
    this.panel.appendChild(titleP);

    let contentP = this.contentP = document.createElement('p');
    contentP.innerHTML = this.content;
    contentP.className="content"
    this.panel.appendChild(contentP);

    let confirmBtn = this.confirmBtn = document.createElement('button');
    confirmBtn.innerHTML = 'confirm';
    confirmBtn.className="button confirm-button"

    let cancelBtn = this.cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = 'cancel';
    cancelBtn.className="button cancel-button"

    let btns = this.btns = document.createElement('div');
    btns.className="button-group";
    btns.appendChild(confirmBtn);
    btns.appendChild(cancelBtn);
    this.panel.appendChild(btns);
  }

  eventListener() {
    this.confirmBtn.addEventListener("click", () =>{
      this.onConfirm();
      this.hide();
    });
    this.cancelBtn.addEventListener("click", ()=>{
      this.onCancel();
      this.hide();
    });
  }

  hide() {
    this.panel.style.display = "none";
  }

  show() {
    this.panel.style.display = "block";
  }
}

class ModalOnlyContent extends Modal {
  init(){
    super.init();
    this.titleP.parentNode.removeChild(this.titleP);
  }
}

class ModalClose extends Modal {
  init() {
    super.init();
    let close = this.close = document.createElement("span");
    close.innerHTML = "x";
    close.className = "close-me";
    this.panel.appendChild(close);
  }
  
  eventListener() {
    super.eventListener();
    this.close.addEventListener("click", () => this.hide());
  }
}
