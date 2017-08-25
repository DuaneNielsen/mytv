__customIndicators = [
{
	name: "Equity",
	metainfo: {
		"_metainfoVersion": 40,
		"id": "Equity@tv-basicstudies-1",
		"scriptIdPart": "",
		"name": "Equity",
		"description": "Equity",
		"shortDescription": "Equity",

		"is_hidden_study": true,
		"is_price_study": true,
		"isCustomIndicator": true,

		"plots": [{"id": "plot_0", "type": "line"}],
		"defaults": {
			"styles": {
				"plot_0": {
					"linestyle": 0,
					"visible": true,

					// Make the line thinner
					"linewidth": 1,

					// Plot type is Line
					"plottype": 2,

					// Show price line
					"trackPrice": true,

					"transparency": 40,

					// Set the dark red color for the plot line
					"color": "#880000"
				}
			},

			// Precision is one digit, like 777.7
			"precision": 1,

			"inputs": {}
		},
		"styles": {
			"plot_0": {
				// Output name will be displayed in the Style window
				"title": "Equity value",
				"histogramBase": 0,
			}
		},
		"inputs": [],
	},

	constructor: function() {
		this.init = function(context, inputCallback) {
			this._context = context;
			this._input = inputCallback;

			var symbol = "#EQUITY";
			this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
		};

		this.main = function(context, inputCallback) {
			this._context = context;
			this._input = inputCallback;

			this._context.select_sym(1);

			var v = PineJS.Std.close(this._context);
			return [v];
		}
	}
},
{
	name: "Insiders",
	metainfo: {
		"_metainfoVersion": 40,
		"id": "Insiders@tv-basicstudies-1",
		"scriptIdPart": "",
		"name": "Insiders",
		"description": "Insiders",
		"shortDescription": "Insiders",

		"is_hidden_study": false,
		"is_price_study": true,
		"isCustomIndicator": true,

		"plots": [{"id": "plot_0", "type": "line"}],
		"defaults": {
			"styles": {
				"plot_0": {
					"linestyle": 0,
					"visible": true,

					// Make the line thinner
					"linewidth": 5,

					// Plot type is Line
					"plottype": 6,

					// Show price line
					"trackPrice": true,

					"transparency": 40,

					// Set the dark red color for the plot line
					"color": "#880000"
				}
			},

			// Precision is one digit, like 777.7
			"precision": 2,

			"inputs": {}
		},
		"styles": {
			"plot_0": {
				// Output name will be displayed in the Style window
				"title": "Insider buy sell",
				"histogramBase": 0,
			}
		},
		"inputs": [],
	},

	constructor: function() {
		this.init = function(context, inputCallback) {
			this._context = context;
			this._input = inputCallback;

			var symbol = "#INSIDERS";
			this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
		};

		this.main = function(context, inputCallback) {
			this._context = context;
			this._input = inputCallback;

			this._context.select_sym(1);

			var v = PineJS.Std.close(this._context);
			return [v];
		}
	}
}
];