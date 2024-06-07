import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post"
export default class extends Controller {
  connect() {
    document.getElementById("modal").classList.remove("hidden");
  }
}
