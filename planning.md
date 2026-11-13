# Weather App — Project Plan

> **Project:** Weather App  
> **Status:** Planning completed / Development in progress  
> **Planned start date:** 10 November 2026  
> **Target completion date:** 17 November 2026  
> **Design direction:** Glassmorphism — Light & Dark Mode  
> **Weather data provider:** Open-Meteo

---

## 1. Project overview

A responsive weather website where users can search for a city and view its current weather and upcoming forecast.

This project will help practise and apply HTML, CSS, JavaScript, DOM manipulation, events, Fetch API, JSON, and `async/await`.

**Main goal:** Build the project step by step and understand the code instead of copying a complete solution.

---

## 2. Design system

### Visual direction — Glassmorphism

The interface should feel modern, clean, and visually engaging, using a glassmorphism design with weather-based background photography.

Design rules:

- Use transparent glass-like surfaces for the main weather and information sections.
- Keep the background weather image subtly visible through the cards.
- Use soft borders, background blur, and restrained shadows.
- Maintain readable text contrast over all background images.
- Use consistent spacing, alignment, and typography.
- Avoid excessive decorative elements and unnecessary cards.
- Keep the same visual identity across desktop and mobile.
- Support both Light Mode and Dark Mode.

### Light Mode color palette

| Token                | HEX       | Usage                                  |
| -------------------- | --------- | -------------------------------------- |
| `--color-background` | `#F8F7F2` | Main background                        |
| `--color-sage`       | `#A7B89F` | Glass tint and surfaces                |
| `--color-primary`    | `#2F3E2F` | Primary buttons and important elements |
| `--color-text`       | `#1A1F1B` | Main text and headings                 |

### Dark Mode color palette

| Token                | HEX       | Usage                        |
| -------------------- | --------- | ---------------------------- |
| `--color-background` | `#071629` | Main background              |
| `--color-blue`       | `#102B4C` | Glass tint and surfaces      |
| `--color-glass`      | `#29466A` | Glass cards                  |
| `--color-accent`     | `#F6C945` | Highlights and weather icons |

**Glassmorphism implementation notes:**

- Use transparent versions of the palette colors for glass surfaces.
- Background photographs should remain faintly visible through the cards.
- Use backdrop blur to create the frosted-glass effect.
- Adjust transparency and text contrast depending on the background image.

**Important:** These color codes are the finalized project palette. Do not replace them with the previous Natural Sage & Cream palette.

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
| APP NAME                         DATE / LOCATION / THEME      |
+--------------------------------------------------------------+
| [ Search for a city...                         ] [ Search ]  |
+--------------------------------------------------------------+
|                                                              |
| +-------------------------------+  +-----------------------+ |
| | CITY NAME                     |  | TODAY'S DETAILS       | |
| |                               |  |                       | |
| |       26°                     |  | Humidity       68%    | |
| | Partly cloudy                 |  | Wind       14 km/h    | |
| | Feels like 28°                |  | UV index   Moderate   | |
| | Weather icon                  |  |                       | |
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
| Theme toggle    | Switch between Light Mode and Dark Mode            |

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
| 9. Theme toggle   | Implement Light Mode and Dark Mode      |
| 10. Final review  | Test, polish, and write README          |
| 11. Publish       | Push the completed project to GitHub    |

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
- [ ] Light/Dark Mode
- [ ] Final testing and README
- [ ] GitHub push

---

## 9. About the creator

**Created by Laxman Singh**

Frontend development learner, building projects to strengthen practical skills in HTML, CSS, and JavaScript.

**GitHub:** https://github.com/Laxman8650
