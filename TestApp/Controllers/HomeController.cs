using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class HomeController : Controller
    {
        //
        ProjectEntities projectDB = new ProjectEntities();

        public ActionResult Index()
        {
            var projects = projectDB.Projects.ToList();

            return View(projects);
        }

    }
}
