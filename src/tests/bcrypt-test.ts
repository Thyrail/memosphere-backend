import * as bcrypt from 'bcrypt';

(async () =>
{
    const storedHash = '';
    const inputPassword = '';

    console.log(`Entered password: ${inputPassword}`);
    console.log(`Stored hash: ${storedHash}`);

    try
    {
        const isMatch = await bcrypt.compare(inputPassword, storedHash);
        console.log(`Password comparison: ${isMatch ? 'Successful' : 'Failed'}`);
    } catch (error)
    {
        const err = error as Error;
        console.error(`Error in bcrypt.compare: ${err.message}`);
    }

    // If necessary, generate a new hash
    const newHash = await bcrypt.hash(inputPassword, 10);
    console.log(`New hash: ${newHash}`);

})();