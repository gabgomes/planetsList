using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
public class responseDto
{
    public string Name { get; set; }
}

namespace TesteApi.WebAPI.Controllers
{
    /// <summary>
    /// Live
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PlanetsController : BaseController
    {
            /// <summary>
            /// Planets
            /// </summary>
            /// <returns></returns>
            [HttpGet]
            [AllowAnonymous]
            [ResponseCache(Duration = 0, NoStore = true)]
            public async Task<HttpResponseMessage> GetPlanetsAsync()
            {
                HttpClient client = new HttpClient();
                HttpResponseMessage response = await client.GetAsync("https://swapi.dev/api/planets");
                return response;
            }

            /// <summary>
            /// Planets
            /// </summary>
            /// <returns></returns>
            [HttpGet]
            [AllowAnonymous]
            [ResponseCache(Duration = 0, NoStore = true)]
            public async Task<HttpResponseMessage> GetPlanetsDetailsAsync(int id)
            {
                HttpClient client = new HttpClient();
                HttpResponseMessage response = await client.GetAsync("https://swapi.dev/api/planets/${id}");
                return response;
            }

    }
}
