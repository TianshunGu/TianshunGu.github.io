require "nokogiri"

# Use the rendered bibliography order for both the list and its cross-references.
Jekyll::Hooks.register :site, :post_render do |site|
  %w[en zh].each do |language|
    pages = site.pages.select { |page| page.data["lang"] == language }
    publications = pages.find { |page| page.data["section"] == "publications" }
    next unless publications

    document = Nokogiri::HTML5(publications.output)
    list = document.at_css("ol.bibliography")
    next unless list

    entries = list.css("li [id^='paper-']")
    list["reversed"] = "reversed"
    numbers = entries.each_with_index.to_h { |entry, index| [entry["id"], entries.size - index] }
    publications.output = document.to_html

    pages.each do |page|
      next unless %w[home research].include?(page.data["section"])

      content = Nokogiri::HTML5(page.output)
      content.css("a.paper-cite").each do |link|
        target = link["href"].split("#", 2).last
        number = numbers.fetch(target) { raise "Unknown publication #{target} on #{page.url}" }
        link.content = "[#{number}]"
      end
      page.output = content.to_html
    end
  end
end
