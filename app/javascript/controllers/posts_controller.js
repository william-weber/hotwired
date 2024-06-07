import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="posts"
export default class extends Controller {
  show(event) {
    event.preventDefault();
    const turboFrame = document.getElementById("post");
    turboFrame.src = this.element.dataset.url;
  }

  close() {
    document.getElementById("modal").classList.add("hidden");
  }
}
