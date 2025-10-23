import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Login Test', () => {
    it('should login and verify user profile name', async () => {
        // Navega para a tela de login
        await homePage.openMenu('profile')
        
        // Realiza o login
        await loginPage.login('cliente@ebac.art.br','GD*peToHNJ1#c$sgk08EaYJQ')
        
        // Navega para o perfil do usuário
        await homePage.openMenu('profile')
        
        // Verifica se o nome do usuário está exibido
        await expect(profilePage.profileName('EBAC Cliente')).toBeDisplayed()
    })
})
