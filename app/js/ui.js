/* Food4Lives — tiny UI layer: modal open/close only. No framework, no backend.
   Dropdowns use native <details>, so they need no JS at all. */
(function () {
  "use strict";

  // [data-open="modal-id"] opens that <dialog>
  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-open]");
    if (opener) {
      var dlg = document.getElementById(opener.getAttribute("data-open"));
      if (dlg && typeof dlg.showModal === "function") {
        e.preventDefault();
        dlg.showModal();
      }
      // close any open dropdown so the menu doesn't sit under the backdrop
      document.querySelectorAll("details.dropdown[open]").forEach(function (d) { d.open = false; });
      return;
    }
    // click on the backdrop (outside .modal-card) closes the dialog
    if (e.target.matches("dialog.modal")) e.target.close();
    // clicking outside an open dropdown closes it
    if (!e.target.closest("details.dropdown")) {
      document.querySelectorAll("details.dropdown[open]").forEach(function (d) { d.open = false; });
    }
  });
})();
