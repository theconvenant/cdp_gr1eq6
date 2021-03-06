
const { Builder, By, Key, until } = require('selenium-webdriver')

const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

describe('US3_deleteProject', function () {
    this.timeout(30000)
    let driver
    beforeEach(async function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
    })
    afterEach(async function () {
        await driver.quit()
    })
  it('us18_modifySprint', async function() {
    await driver.get("http://localhost:8080/")
    await driver.manage().window().setRect(850, 860)
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("userTest")
    await driver.findElement(By.name("password")).sendKeys("userPass")
    await driver.findElement(By.name("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".w3-btn:nth-child(1)")).click()
    await driver.findElement(By.name("projectName")).click()
    await driver.findElement(By.name("projectName")).sendKeys("modify sprint")
    await driver.findElement(By.name("description")).sendKeys("test modify sprint")
    await driver.findElement(By.css(".w3-btn:nth-child(5)")).click()
    await driver.findElement(By.css(".Projects:nth-child(4) .w3-btn")).click()
    await driver.findElement(By.id("onglet_issues")).click()
    await driver.findElement(By.css(".w3-btn:nth-child(1)")).click()
    await driver.findElement(By.name("usNum")).click()
    await driver.findElement(By.name("usNum")).sendKeys("us_1")
    await driver.findElement(By.name("description")).sendKeys("to be inserted in sprint")
    await driver.findElement(By.name("difficulty")).sendKeys("1")
    await driver.findElement(By.css("input:nth-child(11)")).click()
    await driver.findElement(By.name("priority")).click()
    await driver.findElement(By.css("input:nth-child(19)")).click()
    await driver.findElement(By.name("state")).click()
    await driver.findElement(By.css(".w3-btn:nth-child(23)")).click()
    await driver.findElement(By.id("onglet_projectManagement")).click()
    await driver.findElement(By.id("onglet_sprints")).click()
    await driver.findElement(By.css(".w3-margin:nth-child(6) > .w3-btn")).click()
    await driver.findElement(By.name("sprintName")).click()
    await driver.findElement(By.name("sprintName")).sendKeys("sprint_test")
    await driver.findElement(By.name("description")).sendKeys("test sprint")
    await driver.findElement(By.name("startDate")).click()
    await driver.findElement(By.name("startDate")).sendKeys("2019-12-10")
    await driver.findElement(By.name("endDate")).click()
    await driver.findElement(By.name("endDate")).sendKeys("2019-12-17")
    await driver.findElement(By.css(".w3-btn:nth-child(9)")).click()
    await driver.findElement(By.name("current_sprint")).click()
    await driver.findElement(By.css(".w3-margin:nth-child(3) > .w3-btn")).click()
    await driver.findElement(By.name("usList")).click()
    await driver.findElement(By.css(".w3-btn:nth-child(5)")).click()
    await driver.findElement(By.css(".w3-lime > .w3-bar-item")).click()
  })
})
