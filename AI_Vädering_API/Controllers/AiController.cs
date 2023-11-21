using Microsoft.AspNetCore.Mvc;
using AI_Vädering_APIML.Model;

namespace AI_Vädering_API.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherForecastController : ControllerBase
	{

		[HttpGet(Name = "valuation")]
		public IEnumerable<PricePrediction> Get(string Kommun, float BoArea, float Rum, float TomtArea)
		{

			Console.WriteLine("Kommun: " + Kommun);
			Console.WriteLine("BoArea: " + BoArea.ToString());
			Console.WriteLine("Rum: " + Rum.ToString());
			Console.WriteLine("TomtArea: " + TomtArea.ToString());
			Console.WriteLine("----------------------");


			//Ai Price Predictor
			ModelInput sampleData = new ModelInput()
			{
				Kommun = Kommun,
				BoArea = BoArea.ToString(),
				Rum = Rum,
				TomtArea = TomtArea,
			};

			//Load model and predict output
			var result = ConsumeModel.Predict(sampleData);


			return Enumerable.Range(1, 1).Select(index => new PricePrediction
			{
				Pris = result.Score
			})
			.ToArray();
		}
	}
}