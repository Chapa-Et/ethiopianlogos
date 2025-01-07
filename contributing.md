# Contributing

There are two ways to contribute to this project:

## Using the form
You can upload your logos directly to the online form here: [Google Forms](https://docs.google.com/forms/d/12cavlW_X-2gZqAgtRFEG3rTlq8m7eqUXT11WLZErY-Q/edit?ts=6114e461). This usually takes about 72 hours to be reviewed and merged.

## Sending in a pull request
Another way to contribute is to directly send in a pull request. Here are some guidelines for this:

1. Ensure your logos have been properly optimised with tools like:
    [SVGOMG](https://jakearchibald.github.io/svgomg/) &
    [Squoosh](https://squoosh.app/) **(OxiPNG works well)**. Kindly ensure your file sizes are as small as possible. Also, your SVG file should be text-only and not contain any bitmaps.

2. Add a folder to **logos** named after your company. In this folder, put the svg and png versions of your logo. The files should have the same name as the folder and should be lowercase. If your company name has multiple words, kindly separate them with an underscore.

### Folder Structure
```
company_name
| company_name.png
| company_name.svg
```

3. In **[logos.json](https://github.com/Chapa-Et/ethiopianlogos/blob/main/logos.json)**, add a `JSON` entry for your company

### JSON Object
```
{
  "title": "Company Name",
  "filename": "company_name",
  "url": "https://company_url.com",
  "category": ["Category"]
}
```
**Example**
```
{
  "title": "Zemen Bank",
  "filename": "zemen_bank",
  "url": "https://www.zemenbank.com/",
  "category": ["Banking", "Financial Services"]
}
```

4. If your company category is not reflected in categories section *below*, feel free to use a new category.
If you do so, kindly edit this file; adding the newly used category (**[/contributing.md](https://github.com/Chapa-Et/ethiopianlogos/blob/main/contributing.md)**) in your PR as well.
**NB:** Your jsonObject category can also be a combined form 2 or more categories in this form:  **e.g.**
```
"category": ["NGO", "Ecommerce"] or
"category": ["NGO", "Ecommerce", "Marketplace"] or
"category": ["NGO"]
```

5. Make sure your company URL has the `http://` or `https://` prefix or it will be rendered as invalid (this is to prevent some quirks in link redirection).
**NB:** By default, all empty or invalid urls will be linked to google search rather than the official website.
```
"url": "https://chapa.co" or
"url": "https://www.chapa.co"
not
"url": "chapa.co" or
"url": "www.chapa.co"
```

### Categories
```
* Advertising
* Banking
* beverage
* Blog
* Branding
* Business Ratings and Reviews
* Comics
* Construction
* Coworking Space
* Defense
* Domain Registrar
* Ecommerce
* Entertainment
* Event Management
* Financial Services
* Gaming
* Government
* Government Agency
* Health
* Hospitality
* Hotel
* ICT
* Incubator
* ISP
* Local Search
* Marketplace
* Media
* Military
* Mobile Payments
* Newspaper
* NGO
* Online Food Delivery
* Petroleum and Gas
* Product Design
* Publishing
* Real Estate
* Restaurant
* Software
* Sports
* Telecommunication
* Tourism
* Transportation
* Web Host
```

**NOTE**: _Pull requests are usually reviewed within 48 hours. Once your pull request is merged, you should see your logo on the site a few minutes after._
