window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
    //Button1-Function CollectorID = 0307283d
    "0307283d": {
      triggerFunction: function (showCollectorDialog) {
        //Requries that jQuery is available!
        jQuery("#Button1").click(function (e) {
          e.preventDefault();
          showCollectorDialog();
        });
      },
      //Define some fields
      fieldValues: {
        summary: "",
        description: "",

        // hidden field value
        priority: "3",
      },
    },

    //Button2-Function CollectorID = b728b697
    "35e62aeb": {
      triggerFunction: function (showCollectorDialog) {
        //Requries that jQuery is available!
        jQuery("#Button2").click(function (e) {
          e.preventDefault();
          showCollectorDialog();
        });
      },
      //Define some fields
      fieldValues: {
        summary: "",
        description: "",

        // hidden field value
        priority: "3",
      },
    },
  });