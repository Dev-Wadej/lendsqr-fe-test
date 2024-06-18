import { test, expect, Page } from "@playwright/test"

const base_url =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

test("has dashboard", async ({ page }) => {
  await page.goto("http://localhost:5173/")
  await page.locator("[name='email']").fill("joshuaadeniyi2000@gmail.com")
  await page.locator("[name='password']").fill("Lendsqr80")
  await page.getByRole("button", { name: "LOG IN" }).click()

  await expect(page.getByText(/Users/)).toBeVisible()
  await expect(page).toHaveTitle(/Lendsqr/)

  const response = await page.request.get(base_url)
  expect(response.status()).toBe(200)

  // route to details page
  await page.locator("#status").nth(0).click()
  await expect(page.getByText(/View Details/)).toBeVisible()
  await page.locator("#table-action").click()

  await expect(page.getByText(/User Details/)).toBeVisible()

  const userdetails = await page.request.get(`${base_url}/1`)
  expect(userdetails.status()).toBe(200)

  await checkUserInLocalStorage(page, "Maverick.Hyatt83@gmail.com")
})

async function checkUserInLocalStorage(page: Page, email: string) {
  return await page.waitForFunction((t) => {
    const storedState = localStorage.getItem("user-1") as string
    return JSON.parse(storedState)?.email.includes(t)
  }, email)
}
