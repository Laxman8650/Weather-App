# Weather App — Project Plan

> **Project:** Weather App  
> **Status:** Planning completed / Development not started  
> **Planned start date:** 10 November 2026  
> **Target completion date:** 17 November 2026  
> **Design direction:** Natural Sage & Cream  
> **Weather data provider:** Open-Meteo

---

## 1. Project overview

A responsive weather website where users can search for a city and view its current weather and upcoming forecast.

This project will help practise and apply HTML, CSS, JavaScript, DOM manipulation, events, Fetch API, JSON, and `async/await`.

**Main goal:** Build the project step by step and understand the code instead of copying a complete solution.

---

## 2. Design system

### Visual direction — Natural Sage & Cream

The interface should feel calm, warm, clean, and thoughtfully designed. It should have its own identity rather than looking like a copy of an existing weather website or a generic AI-generated template.

Design rules:

- Use a warm off-white page background and muted sage surfaces.
- Keep deep green for primary actions and important UI elements.
- Use the warm accent sparingly.
- Prefer clear spacing, alignment, and typography over decoration.
- Use subtle borders and restrained shadows.
- Avoid unnecessary gradients, glassmorphism, excessive pill shapes, and decorative cards.
- Keep the same visual identity on desktop and mobile.

### Color palette

| Token                | HEX       | Usage                          |
| -------------------- | --------- | ------------------------------ |
| `--color-background` | `#F5F3ED` | Main page background           |
| `--color-surface`    | `#E4ECE7` | Weather and information cards  |
| `--color-primary`    | `#355E5A` | Main buttons and active states |
| `--color-text`       | `#263C3A` | Main headings and body text    |
| `--color-accent`     | `#D5A45B` | Small highlights               |
| `--color-muted`      | `#647C77` | Secondary text                 |
| `--color-border`     | `#D9E1DB` | Borders and dividers           |
| `--color-white`      | `#FFFFFF` | Input surfaces where needed    |

These are initial design tokens. Check text contrast during implementation and adjust if needed.

---

## 3. Typography

**Selected font: Manrope**

Use Manrope throughout the website.

| Weight | Usage                                |
| ------ | ------------------------------------ |
| 400    | Body text and supporting information |
| 500    | Labels and secondary UI text         |
| 600    | Section headings and buttons         |
| 700    | Main temperature and key headings    |

The current temperature should be the strongest visual element. Keep other text sizes balanced and readable.

---

## 4. Website structure / wireframe

### Desktop

```text
+--------------------------------------------------------------+
| APP NAME                                      DATE / LOCATION |
+--------------------------------------------------------------+
| [ Search for a city...                         ] [ Search ]   |
+--------------------------------------------------------------+
|                                                              |
| +-------------------------------+  +-----------------------+ |
| | CITY NAME                     |  | TODAY'S DETAILS       | |
| |                               |  |                       | |
| |       26°                     |  | Humidity       68%    | |
| | Partly cloudy                 |  | Wind       14 km/h    | |
| | Feels like 28°                |  | UV index   Moderate   | |
| | Weather icon / illustration  |  |                       | |
| | High 31°          Low 21°     |  |                       | |
| +-------------------------------+  +-----------------------+ |
|                                                              |
| 5-DAY FORECAST                                                |
| +----------+ +----------+ +----------+ +----------+ +-------+ |
| | Day      | | Day      | | Day      | | Day      | | Day   | |
| | Icon     | | Icon     | | Icon     | | Icon     | | Icon  | |
| | High/Low | | High/Low | | High/Low | | High/Low | | H/L   | |
| +----------+ +----------+ +----------+ +----------+ +-------+ |
+--------------------------------------------------------------+
```

### Mobile

Stack the content in this order:

1. Header
2. City search
3. Current weather
4. Weather details
5. Five-day forecast

The forecast may use compact cards or a horizontally scrollable row on small screens.

---

## 5. Main UI components

| Component       | Purpose                                            |
| --------------- | -------------------------------------------------- |
| Header          | App name and date/location context                 |
| Search form     | Enter and submit a city name                       |
| Current weather | City, temperature, condition, feels-like, high/low |
| Weather details | Humidity, wind speed, and UV index when available  |
| Forecast        | Upcoming daily weather                             |
| Loading state   | Show while weather data is loading                 |
| Error state     | Explain invalid city or request failure            |

Keep the components visually consistent. Avoid creating a separate card for every small piece of information.

---

## 6. API and data flow

**Provider:** Open-Meteo  
**Documentation:** https://open-meteo.com/en/docs

Open-Meteo provides weather data without an API key for non-commercial use, subject to its current terms and usage limits. Review the provider's terms before publishing or using the project commercially.

A city search will use two requests:

1. **Geocoding:** Convert the city name into latitude and longitude.
2. **Weather:** Request weather data using those coordinates.

### Planned weather information

- City name
- Current temperature
- Weather condition and icon
- Feels-like temperature, if requested
- Humidity, if requested
- Wind speed, if requested
- Daily high and low
- Five-day forecast

The exact API parameters and response fields will be confirmed when API integration begins.

### Data flow

```text
User enters a city
        |
        v
Search form is submitted
        |
        v
Geocoding API finds coordinates
        |
        v
Weather API receives latitude + longitude
        |
        v
JavaScript processes the response
        |
        v
DOM displays the weather information
```

---

## 7. Project folder structure

```text
Weather-App/
|
|-- index.html
|-- style.css
|-- script.js
|
|-- assets/
|   |-- icons/
|   |-- images/
|
|-- planning.md
|-- README.md
```

Start with this simple structure. Add more files only when there is a clear need.

---

## 8. Development milestones

| Milestone         | Work                                    |
| ----------------- | --------------------------------------- |
| 1. Setup          | Create folder and project files         |
| 2. HTML           | Build semantic page structure           |
| 3. CSS            | Add design tokens and desktop layout    |
| 4. Responsive UI  | Adapt layout for mobile                 |
| 5. API practice   | Explore geocoding and weather responses |
| 6. Fetch logic    | Search city and request weather data    |
| 7. DOM updates    | Display current weather and forecast    |
| 8. Error handling | Add loading, empty, and error states    |
| 9. Final review   | Test, polish, and write README          |
| 10. Publish       | Push the completed project to GitHub    |

### Progress checklist

- [ ] Project setup
- [ ] HTML structure
- [ ] Desktop styling
- [ ] Responsive styling
- [ ] Understand API responses
- [ ] City search and API requests
- [ ] Display current weather
- [ ] Display forecast
- [ ] Loading and error handling
- [ ] Final testing and README
- [ ] GitHub push

---

## 9. About the creator

**Created by Laxman Singh**

Frontend development learner, building projects to strengthen practical skills in HTML, CSS, and JavaScript.

**GitHub:** https://github.com/Laxman8650
