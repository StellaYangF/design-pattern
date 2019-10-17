"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Modal);

    this.title = options.title || "Title";
    this.content = options.content || "Content";
    this.onConfirm = options.onConfirm;
    this.onCancel = options.onCancel;
    this.init();
    this.eventListener();
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      this.panel = document.createElement('div');
      this.panel.className = "modal";
      document.body.appendChild(this.panel);
      var titleP = this.titleP = document.createElement('p');
      titleP.innerHTML = this.title;
      titleP.className = "title";
      this.panel.appendChild(titleP);
      var contentP = this.contentP = document.createElement('p');
      contentP.innerHTML = this.content;
      contentP.className = "content";
      this.panel.appendChild(contentP);
      var confirmBtn = this.confirmBtn = document.createElement('button');
      confirmBtn.innerHTML = 'confirm';
      confirmBtn.className = "button confirm-button";
      var cancelBtn = this.cancelBtn = document.createElement('button');
      cancelBtn.innerHTML = 'cancel';
      cancelBtn.className = "button cancel-button";
      var btns = this.btns = document.createElement('div');
      btns.className = "button-group";
      btns.appendChild(confirmBtn);
      btns.appendChild(cancelBtn);
      this.panel.appendChild(btns);
    }
  }, {
    key: "eventListener",
    value: function eventListener() {
      var _this = this;

      this.confirmBtn.addEventListener("click", function () {
        _this.onConfirm();

        _this.hide();
      });
      this.cancelBtn.addEventListener("click", function () {
        _this.onCancel();

        _this.hide();
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.panel.style.display = "none";
    }
  }, {
    key: "show",
    value: function show() {
      this.panel.style.display = "block";
    }
  }]);

  return Modal;
}();

var ModalOnlyContent =
/*#__PURE__*/
function (_Modal) {
  _inherits(ModalOnlyContent, _Modal);

  function ModalOnlyContent() {
    _classCallCheck(this, ModalOnlyContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalOnlyContent).apply(this, arguments));
  }

  _createClass(ModalOnlyContent, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(ModalOnlyContent.prototype), "init", this).call(this);

      this.titleP.parentNode.removeChild(this.titleP);
    }
  }]);

  return ModalOnlyContent;
}(Modal);

var ModalClose =
/*#__PURE__*/
function (_Modal2) {
  _inherits(ModalClose, _Modal2);

  function ModalClose() {
    _classCallCheck(this, ModalClose);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalClose).apply(this, arguments));
  }

  _createClass(ModalClose, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(ModalClose.prototype), "init", this).call(this);

      var close = this.close = document.createElement("span");
      close.innerHTML = "x";
      close.className = "close-me";
      this.panel.appendChild(close);
    }
  }, {
    key: "eventListener",
    value: function eventListener() {
      var _this2 = this;

      _get(_getPrototypeOf(ModalClose.prototype), "eventListener", this).call(this);

      this.close.addEventListener("click", function () {
        return _this2.hide();
      });
    }
  }]);

  return ModalClose;
}(Modal);
